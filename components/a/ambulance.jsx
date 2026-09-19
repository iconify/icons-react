import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/l/l9hplwb4s.css';
import '../../css/o/o49mt59vz.css';
import '../../css/y/yt48078qf.css';
import '../../css/u/u39aax9li.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGsD2Ls4AM"><g class="rohhhzb0l"><path class="l9hplwb4s"/><path class="o49mt59vz"/><circle class="yt48078qf"/><circle class="u39aax9li"/></g></mask></defs><path mask="url(#SVGsD2Ls4AM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:ambulance",
	});
}

export default Component;

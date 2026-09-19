import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/e/eggrvn9ds.css';
import '../../css/s/s13dhxbgk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGSyLUNz4N"><g class="v3_i3wktz"><path class="eggrvn9ds"/><path class="s13dhxbgk"/></g></mask></defs><path mask="url(#SVGSyLUNz4N)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:circle-two-line",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/c/c86dgmbjh.css';
import '../../css/g/gyui38byj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGtKrLJTTk"><g class="v3_i3wktz"><path class="c86dgmbjh"/><path class="gyui38byj"/></g></mask></defs><path mask="url(#SVGtKrLJTTk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:align-bottom",
	});
}

export default Component;

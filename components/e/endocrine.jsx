import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylrso7y3c.css';
import '../../css/o/oxrrerb7b.css';
import '../../css/j/j37pifb9j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGPdFqZdEC"><g class="ylrso7y3c"><path clip-rule="evenodd" class="oxrrerb7b"/><path class="j37pifb9j"/></g></mask></defs><path mask="url(#SVGPdFqZdEC)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:endocrine",
	});
}

export default Component;

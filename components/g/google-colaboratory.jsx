import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gavkigb0a.css';
import '../../css/j/j3mso-bst.css';
import '../../css/i/i7xxw6b4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g display="block"><path class="gavkigb0a"/><path class="j3mso-bst"/><path class="i7xxw6b4j"/></g>`,
		"fallback": "thesvg-color:google-colaboratory",
	});
}

export default Component;

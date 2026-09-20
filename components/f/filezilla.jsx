import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plv2debfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plv2debfx"/>`,
		"fallback": "thesvg-color:filezilla",
	});
}

export default Component;

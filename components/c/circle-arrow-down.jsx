import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yltk3ebdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yltk3ebdw"/>`,
		"fallback": "tabler:circle-arrow-down",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glkmpbbmk.css';
import '../../css/m/m4wlqkz7z.css';
import '../../css/o/o2k6b7btj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glkmpbbmk"/><path class="m4wlqkz7z"/><path class="o2k6b7btj"/>`,
		"fallback": "streamline-freehand:book-bookmark",
	});
}

export default Component;

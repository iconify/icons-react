import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spref0m5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spref0m5h"/>`,
		"fallback": "uit:align-letter-right",
	});
}

export default Component;

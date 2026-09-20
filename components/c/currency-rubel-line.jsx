import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezdushbwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezdushbwn"/>`,
		"fallback": "mingcute:currency-rubel-line",
	});
}

export default Component;

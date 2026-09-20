import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcysl7box.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hcysl7box"/>`,
		"fallback": "mingcute:burj-khalifa-tower-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/moc0ob5yn.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="moc0ob5yn"/>`,
		"fallback": "f7:cloud-heavyrain",
	});
}

export default Component;

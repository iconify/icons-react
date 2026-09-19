import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzv9k8vai.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzv9k8vai"/>`,
		"fallback": "icons8:banknotes",
	});
}

export default Component;

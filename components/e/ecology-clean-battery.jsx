import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8qfcdbuz.css';
import '../../css/m/mp9z7jwwy.css';
import '../../css/u/u75xcjbnz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8qfcdbuz"/><path class="mp9z7jwwy"/><path class="u75xcjbnz"/>`,
		"fallback": "streamline-pixel:ecology-clean-battery",
	});
}

export default Component;

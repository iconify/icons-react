import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcse7wsih.css';
import '../../css/k/kdbvn80vp.css';
import '../../css/k/kem81wb3i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcse7wsih"/><path class="kdbvn80vp"/><path class="kem81wb3i"/>`,
		"fallback": "energy-icons:house-minus-48",
	});
}

export default Component;

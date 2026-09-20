import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-qxuibhr.css';
import '../../css/n/ng2kf2fda.css';
import '../../css/i/i6utg9b0i.css';
import '../../css/c/c1ia1gbuk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-qxuibhr"/><circle class="ng2kf2fda"/><circle class="i6utg9b0i"/><path class="c1ia1gbuk"/>`,
		"fallback": "material-icon-theme:folder-cart-open",
	});
}

export default Component;

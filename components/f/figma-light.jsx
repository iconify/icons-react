import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9r8s4rsw.css';
import '../../css/h/h6klkqbsh.css';
import '../../css/q/qf19skb9v.css';
import '../../css/e/eux5nikfz.css';
import '../../css/i/ihq6w6b0e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9r8s4rsw"/><path class="h6klkqbsh"/><circle class="qf19skb9v"/><path class="eux5nikfz"/><path class="ihq6w6b0e"/>`,
		"fallback": "selfhst:figma-light",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/luxx0zeko.css';
import '../../css/o/oc-e4mb7v.css';
import '../../css/i/i8e6vr1if.css';
import '../../css/w/wut-a81uk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="luxx0zeko"/><path clip-rule="evenodd" class="oc-e4mb7v"/><path class="i8e6vr1if"/><path clip-rule="evenodd" class="wut-a81uk"/>`,
		"fallback": "teenyicons:ab-testing-solid",
	});
}

export default Component;

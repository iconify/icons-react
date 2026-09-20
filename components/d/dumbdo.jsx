import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl0w_em6f.css';
import '../../css/q/qeuinobue.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="jl0w_em6f"/><path class="qeuinobue"/>`,
		"fallback": "selfhst:dumbdo",
	});
}

export default Component;

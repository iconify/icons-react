import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpf2v5gyu.css';
import '../../css/m/mdp5ddq7n.css';
import '../../css/e/eirurobfw.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="clr-i-solid clr-i-solid-path-1 qpf2v5gyu"/><path class="clr-i-solid clr-i-solid-path-2 mdp5ddq7n"/><path class="clr-i-solid clr-i-solid-path-3 eirurobfw"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:collapse-card-solid",
	});
}

export default Component;

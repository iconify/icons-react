import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdv-jqbkl.css';
import '../../css/b/btgxzabzs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdv-jqbkl"/><path class="btgxzabzs"/>`,
		"fallback": "streamline-pixel:health-transfusion-bag",
	});
}

export default Component;

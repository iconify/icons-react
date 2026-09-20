import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asdda2o7p.css';
import '../../css/n/nqlsnkbno.css';
import '../../css/s/sg-3s7bbt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asdda2o7p"/><path class="nqlsnkbno"/><path class="sg-3s7bbt"/>`,
		"fallback": "selfhst:hugo",
	});
}

export default Component;

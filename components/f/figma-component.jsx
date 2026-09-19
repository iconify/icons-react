import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/v/v7raflbyf.css';
import '../../css/o/oh6b3w1gt.css';
import '../../css/q/qtjo6dbkq.css';
import '../../css/z/zsxs2mbbv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path class="v7raflbyf"/><path class="oh6b3w1gt"/><path class="qtjo6dbkq"/><path class="zsxs2mbbv"/></g>`,
		"fallback": "icon-park:figma-component",
	});
}

export default Component;

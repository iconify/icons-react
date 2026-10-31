import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv1d0ac5g.css';
import '../../css/h/hh5o6fbdu.css';
import '../../css/e/eeqrw937b.css';
import '../../css/a/a-avcfbzc.css';
import '../../css/n/nyieiqwii.css';
import '../../css/y/yz9mgab-j.css';
import '../../css/m/maz6fc8ol.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vv1d0ac5g"/><path class="hh5o6fbdu"/><path class="eeqrw937b"/><path class="a-avcfbzc"/><path class="nyieiqwii"/><path class="yz9mgab-j"/><path class="maz6fc8ol"/>`,
		"fallback": "iconito:cupcake",
	});
}

export default Component;

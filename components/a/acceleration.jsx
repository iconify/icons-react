import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/c/cmydvqi2y.css';
import '../../css/k/kxotbvbyx.css';
import '../../css/j/jmnh04bvk.css';
import '../../css/y/ybze6zb8r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGsCw5rc6P"><g class="hv130ab-t"><path class="cmydvqi2y"/><path class="kxotbvbyx"/><path class="jmnh04bvk"/><path class="ybze6zb8r"/></g></mask></defs><path mask="url(#SVGsCw5rc6P)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:acceleration",
	});
}

export default Component;

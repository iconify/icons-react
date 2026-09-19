import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tozv2lbrl.css';
import '../../css/k/krpi41bzj.css';
import '../../css/w/w53f1mbdp.css';
import '../../css/b/bg879tbcy.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tozv2lbrl"/><path class="krpi41bzj"/><path class="w53f1mbdp"/><path class="bg879tbcy"/>`,
		"fallback": "ant-design:idcard-twotone",
	});
}

export default Component;

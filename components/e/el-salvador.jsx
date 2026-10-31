import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjut-nbll.css';
import '../../css/d/d1x_6zbkv.css';
import '../../css/i/i9ea6ipsb.css';
import '../../css/i/irxfsrb2w.css';
import '../../css/d/dwid0nbtw.css';
import '../../css/q/qnri6vbsf.css';
import '../../css/x/x8wk83nhe.css';
import '../../css/h/hzm683bub.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjut-nbll"/><path class="d1x_6zbkv"/><path class="i9ea6ipsb"/><path class="irxfsrb2w"/><path class="dwid0nbtw"/><path class="qnri6vbsf"/><path class="x8wk83nhe"/><path class="hzm683bub"/>`,
		"fallback": "tabler-flags:el-salvador",
	});
}

export default Component;

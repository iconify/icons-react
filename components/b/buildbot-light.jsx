import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzdyxlbsx.css';
import '../../css/h/hsfvaaccc.css';
import '../../css/r/r6l3sbc9i.css';
import '../../css/m/mvxkxk3fh.css';
import '../../css/y/yymt_bcef.css';
import '../../css/q/qszz-hbxb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzdyxlbsx"/><path class="hsfvaaccc"/><path class="r6l3sbc9i"/><path class="mvxkxk3fh"/><path class="yymt_bcef"/><path class="qszz-hbxb"/>`,
		"fallback": "selfhst:buildbot-light",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyd5-obni.css';
import '../../css/t/th32pl67c.css';
import '../../css/q/q_2n7obtj.css';
import '../../css/z/zvgjxlbcx.css';
import '../../css/b/betwnjbtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyd5-obni"/><path class="th32pl67c"/><path class="q_2n7obtj"/><path class="zvgjxlbcx"/><path class="betwnjbtl"/>`,
		"fallback": "gcp:cloud-domains",
	});
}

export default Component;

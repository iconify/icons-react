import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v_zvh2b6l.css';
import '../../css/b/b5mzqnnyt.css';
import '../../css/p/p98mbrjdj.css';
import '../../css/y/yftq3actd.css';
import '../../css/q/qed9ocuzs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v_zvh2b6l"/><path class="b5mzqnnyt"/><path class="p98mbrjdj"/><path class="yftq3actd"/><path class="qed9ocuzs"/></g>`,
		"fallback": "fluent-emoji-flat:boar",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dne0f28rx.css';
import '../../css/l/lzjqd2buc.css';
import '../../css/b/b2lei4btd.css';
import '../../css/h/h_pt1abna.css';
import '../../css/o/o3tb_32op.css';
import '../../css/q/qqp-ddbgg.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dne0f28rx"><path class="lzjqd2buc"/><path class="b2lei4btd"/></g><path class="h_pt1abna"/><path class="o3tb_32op"/><path class="qqp-ddbgg"/><path class="e4zfowz9r"/>`,
		"fallback": "openmoji:gemini",
	});
}

export default Component;

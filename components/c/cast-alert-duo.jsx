import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlbxmdb4d.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yat5egb_l.css';
import '../../css/z/zihikobha.css';
import '../../css/a/a3pcmmbzg.css';
import '../../css/d/dgbjpe3qo.css';
import '../../css/t/t5cw70dys.css';
import '../../css/i/ibo7ffbap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlbxmdb4d secondary"/><g class="dt0cm9dhy primary"><path class="yat5egb_l"/><path class="zihikobha"/><path class="a3pcmmbzg"/><path class="dgbjpe3qo"/><path class="t5cw70dys"/><path class="ibo7ffbap"/></g>`,
		"fallback": "iconaut:cast-alert-duo",
	});
}

export default Component;

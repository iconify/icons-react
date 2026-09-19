import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s82nsqbkr.css';
import '../../css/g/gn9pzlw4w.css';
import '../../css/z/z_4ii68mz.css';
import '../../css/p/pkpf1mbaa.css';
import '../../css/t/tlrj09b8v.css';
import '../../css/v/v8-zj0oev.css';
import '../../css/g/g3mawwmhu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s82nsqbkr"/><circle class="gn9pzlw4w"/><circle class="z_4ii68mz"/><path class="pkpf1mbaa"/><circle class="tlrj09b8v"/><circle class="v8-zj0oev"/><path class="g3mawwmhu"/>`,
		"fallback": "carbon:ibm-watson-tone-analyzer",
	});
}

export default Component;

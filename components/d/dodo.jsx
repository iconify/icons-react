import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/taojv1bao.css';
import '../../css/k/kj6s6jb4k.css';
import '../../css/s/s1pzzcclg.css';
import '../../css/w/w077hzb8r.css';
import '../../css/c/c4s3knbei.css';
import '../../css/q/qjdyzunlh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="taojv1bao"/><path class="kj6s6jb4k"/><path class="s1pzzcclg"/><path class="w077hzb8r"/><path class="c4s3knbei"/><path class="qjdyzunlh"/></g>`,
		"fallback": "fluent-emoji-flat:dodo",
	});
}

export default Component;

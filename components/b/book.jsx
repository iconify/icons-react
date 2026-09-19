import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yoo-kwbnt.css';
import '../../css/v/v5pb8-byn.css';
import '../../css/g/gk8hcxbvc.css';
import '../../css/t/t_4k26iyn.css';
import '../../css/h/hvn2tnezz.css';
import '../../css/t/ttnt112wp.css';
import '../../css/w/w7z_vzaig.css';
import '../../css/g/gr8lgwbjh.css';
import '../../css/a/a9c-qkbci.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yoo-kwbnt"/><path clip-rule="evenodd" class="v5pb8-byn"/><path clip-rule="evenodd" class="gk8hcxbvc"/><path clip-rule="evenodd" class="t_4k26iyn"/><path clip-rule="evenodd" class="hvn2tnezz"/><path clip-rule="evenodd" class="ttnt112wp"/><path clip-rule="evenodd" class="w7z_vzaig"/><path clip-rule="evenodd" class="gr8lgwbjh"/><path clip-rule="evenodd" class="a9c-qkbci"/>`,
		"fallback": "flat-ui:book",
	});
}

export default Component;

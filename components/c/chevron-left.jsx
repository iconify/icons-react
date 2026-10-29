import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jshh2ec2f.css';
import '../../css/g/g_cnmgbyh.css';
import '../../css/z/z50j8nbdt.css';
import '../../css/o/ov6hnac8z.css';
import '../../css/y/yv3ktebti.css';
import '../../css/x/xa5pkknmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="jshh2ec2f wm-shadow"/><path class="g_cnmgbyh"/><path class="z50j8nbdt"/><path class="ov6hnac8z"/><path class="wm-shine yv3ktebti"/><path class="wm-deco xa5pkknmk"/></g>`,
		"fallback": "withicons-sticker:chevron-left",
	});
}

export default Component;

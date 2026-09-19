import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_imcobsl.css';
import '../../css/t/tzb-fjbvg.css';
import '../../css/z/zxol_fymk.css';
import '../../css/c/ckhj8wq2j.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_imcobsl"/><path class="tzb-fjbvg"/><path class="zxol_fymk"/><path class="ckhj8wq2j"/>`,
		"fallback": "ant-design:contacts-twotone",
	});
}

export default Component;

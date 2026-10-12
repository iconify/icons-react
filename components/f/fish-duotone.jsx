import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hpszv2t0a.css';
import '../../css/z/zv7cqytgb.css';
import '../../css/f/f871idzby.css';
import '../../css/s/s5_swabos.css';
import '../../css/k/k0yolxb5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hpszv2t0a"/><path class="zv7cqytgb"/><path class="f871idzby"/><path class="s5_swabos"/><path class="k0yolxb5q"/></g>`,
		"fallback": "lucide-extended:fish-duotone",
	});
}

export default Component;

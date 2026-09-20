import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0hqxm.css';
import '../../css/k/kmed5s.css';
import '../../css/c/cwy86a.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-60.css';
import '../../css/d/d-tcc6vx.css';
import '../../css/d/d-67r94s.css';
import '../../css/t/tr-g4nb9z.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-1px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGVBm5DdAt"><path class="l0hqxm"/><path class="kmed5s"/><circle class="cwy86a"/></mask></defs><path mask="url(#SVGVBm5DdAt)" class="botfzx"/>`,
		"fallback": "line-md:compass",
	});
}

export default Component;

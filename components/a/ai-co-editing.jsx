import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/ggclseb0g.css';
import '../../css/o/of4mc-rsl.css';
import '../../css/f/f-axaw8df.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ggclseb0g"/><circle class="of4mc-rsl"/><path class="f-axaw8df"/></g>`,
		"fallback": "hugeicons:ai-co-editing",
	});
}

export default Component;

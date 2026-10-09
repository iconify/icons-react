import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw69dfdzg.css';
import '../../css/n/nb8b6vbgg.css';
import '../../css/i/i52nyunzx.css';
import '../../css/b/bon82pb8j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dw69dfdzg"/><path class="nb8b6vbgg"/><path class="i52nyunzx"/><path class="bon82pb8j"/>`,
		"fallback": "energy-icons:data-centre-20",
	});
}

export default Component;

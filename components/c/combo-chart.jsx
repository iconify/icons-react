import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe7g64d_l.css';
import '../../css/w/wtfmx7b3v.css';
import '../../css/z/zpl_wxb_t.css';
import '../../css/x/xq4cahi3o.css';
import '../../css/q/qy1652spj.css';
import '../../css/v/vq8vbqbqz.css';
import '../../css/p/pdj70cmqy.css';
import '../../css/f/fpsnixb4k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xe7g64d_l"/><g class="wtfmx7b3v"><circle class="zpl_wxb_t"/><circle class="xq4cahi3o"/><circle class="qy1652spj"/><circle class="vq8vbqbqz"/><circle class="pdj70cmqy"/><path class="fpsnixb4k"/></g>`,
		"fallback": "flat-color-icons:combo-chart",
	});
}

export default Component;

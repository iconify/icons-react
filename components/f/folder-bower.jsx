import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spajzybyt.css';
import '../../css/v/vii4epb6f.css';
import '../../css/z/zz3pjr6iv.css';
import '../../css/t/t031vccqz.css';
import '../../css/t/ts9s2zbcr.css';
import '../../css/m/m4xjgbcao.css';
import '../../css/k/kmu0p2bfo.css';
import '../../css/t/t-v325lps.css';
import '../../css/t/tsmi2tjli.css';
import '../../css/r/rb1o9ob4e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spajzybyt"/><path class="vii4epb6f"/><path class="zz3pjr6iv"/><path class="t031vccqz"/><path class="ts9s2zbcr"/><path class="m4xjgbcao"/><path class="kmu0p2bfo"/><path class="t-v325lps"/><path class="tsmi2tjli"/><ellipse class="rb1o9ob4e"/>`,
		"fallback": "material-icon-theme:folder-bower",
	});
}

export default Component;

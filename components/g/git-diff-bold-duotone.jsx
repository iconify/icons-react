import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/l/lv7o27lha.css';
import '../../css/n/n7pyn85wa.css';
import '../../css/p/p03812bxn.css';
import '../../css/m/mnelrmb_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="lv7o27lha"/><path class="n7pyn85wa"/></g><path clip-rule="evenodd" class="p03812bxn"/><path clip-rule="evenodd" class="mnelrmb_n"/>`,
		"fallback": "solar:git-diff-bold-duotone",
	});
}

export default Component;

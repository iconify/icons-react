import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tcbeiybdg.css';
import '../../css/c/c02hgdc7d.css';
import '../../css/a/a2wwsgbar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tcbeiybdg"/><path class="c02hgdc7d"/><path class="a2wwsgbar"/></g>`,
		"fallback": "reicon:bug-slash",
	});
}

export default Component;

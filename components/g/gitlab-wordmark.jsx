import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyukhkbwi.css';
import '../../css/n/nn68jobvu.css';
import '../../css/s/spqgtvbyi.css';
import '../../css/i/idse3ubex.css';
import '../../css/k/kloemtb_t.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyukhkbwi"/><path class="nn68jobvu"/><path class="spqgtvbyi"/><path class="idse3ubex"/><path class="kloemtb_t"/>`,
		"fallback": "devicon:gitlab-wordmark",
	});
}

export default Component;

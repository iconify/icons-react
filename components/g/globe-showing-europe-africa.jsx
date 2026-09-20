import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snp287xku.css';
import '../../css/d/df-gwtloe.css';
import '../../css/o/o4jeclbyr.css';
import '../../css/x/xlumf6buz.css';
import '../../css/g/gr58g7w1n.css';
import '../../css/v/vddf-pl6d.css';
import '../../css/p/pjhsa7b8q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snp287xku"/><path class="df-gwtloe"/><path class="o4jeclbyr"/><path class="xlumf6buz"/><path class="gr58g7w1n"/><path class="vddf-pl6d"/><path class="pjhsa7b8q"/>`,
		"fallback": "streamline-emojis:globe-showing-europe-africa",
	});
}

export default Component;

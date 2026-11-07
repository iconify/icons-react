import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfivsih3f.css';
import '../../css/o/oebj-uxdy.css';
import '../../css/q/qo2z3ox4j.css';
import '../../css/n/npeo6sb4h.css';
import '../../css/e/edpy69b4e.css';
import '../../css/b/bbrwsrh0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfivsih3f"/><path class="oebj-uxdy"/><path clip-rule="evenodd" class="qo2z3ox4j"/><path class="npeo6sb4h"/><path class="edpy69b4e"/><path class="bbrwsrh0a"/>`,
		"fallback": "solar:conditioner-outline",
	});
}

export default Component;

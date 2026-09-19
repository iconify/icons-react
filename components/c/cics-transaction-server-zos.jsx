import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr55nlbza.css';
import '../../css/n/n79xfpb3k.css';
import '../../css/b/b65gtabis.css';
import '../../css/y/yyvrhuu2d.css';
import '../../css/j/jyufl3bad.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="tr55nlbza"/><path class="n79xfpb3k"/><path class="b65gtabis"/><circle class="yyvrhuu2d"/><path class="jyufl3bad"/>`,
		"fallback": "carbon:cics-transaction-server-zos",
	});
}

export default Component;

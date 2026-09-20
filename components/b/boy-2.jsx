import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek4h0_bfu.css';
import '../../css/o/olwd66dga.css';
import '../../css/s/sg9fdzxjy.css';
import '../../css/s/swux9bb0c.css';
import '../../css/i/iv56myiic.css';
import '../../css/a/aytuk77uv.css';
import '../../css/b/bofxwhh-s.css';
import '../../css/r/ri8y_dbdr.css';
import '../../css/n/nft7ddbxq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ek4h0_bfu"/><path class="olwd66dga"/><path class="sg9fdzxjy"/><path class="swux9bb0c"/><path class="iv56myiic"/><path class="aytuk77uv"/><path class="bofxwhh-s"/><path class="ri8y_dbdr"/><path class="nft7ddbxq"/>`,
		"fallback": "streamline-emojis:boy-2",
	});
}

export default Component;

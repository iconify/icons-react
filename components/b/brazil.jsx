import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tay4xd-8e.css';
import '../../css/b/bpfzmzkzu.css';
import '../../css/u/utxtcsmff.css';
import '../../css/p/pz370hbva.css';
import '../../css/a/adhy-nbnh.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tay4xd-8e"/><path class="bpfzmzkzu"/><path class="utxtcsmff"/><path class="pz370hbva"/><path class="adhy-nbnh"/><path class="snp287xku"/>`,
		"fallback": "streamline-emojis:brazil",
	});
}

export default Component;

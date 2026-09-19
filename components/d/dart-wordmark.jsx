import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbnebzb-c.css';
import '../../css/l/l5sngpb3z.css';
import '../../css/k/ko66-abxv.css';
import '../../css/n/njjmi10hk.css';
import '../../css/k/k07etcbka.css';
import '../../css/p/p0xq2qbot.css';
import '../../css/d/drmffebbh.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbnebzb-c"/><path class="l5sngpb3z"/><path class="ko66-abxv"/><path class="njjmi10hk"/><path class="k07etcbka"/><path class="p0xq2qbot"/><path class="drmffebbh"/>`,
		"fallback": "devicon:dart-wordmark",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk1zpm-hn.css';
import '../../css/q/qb8fo0s2t.css';
import '../../css/h/h1zfeob5s.css';
import '../../css/f/fxr25cbfp.css';
import '../../css/a/a7dqsdb8d.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dk1zpm-hn"><path class="qb8fo0s2t"/><path class="h1zfeob5s"/><path class="fxr25cbfp"/><path class="a7dqsdb8d"/></g>`,
		"fallback": "streamline-stickies-color:control-duo",
	});
}

export default Component;

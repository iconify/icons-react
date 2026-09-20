import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qtu-yctmq {
  fill: currentColor;
  d: path("M138 168a10 10 0 1 1-10-10a10 10 0 0 1 10 10m76-52v36a86 86 0 0 1-172 0V76a26 26 0 0 1 40-21.89V44a26 26 0 0 1 51.41-5.51A26 26 0 0 1 174 60v34.11A26 26 0 0 1 214 116m-12 0a14 14 0 0 0-28 0v4a6 6 0 0 1-12 0V60a14 14 0 0 0-28 0v44a6 6 0 0 1-12 0V44a14 14 0 0 0-28 0v68a6 6 0 0 1-12 0V76a14 14 0 0 0-28 0v76a74 74 0 0 0 148 0Zm-20.63 49.32a6 6 0 0 1 0 5.36C180.65 172.12 163.3 206 128 206s-52.65-33.88-53.37-35.32a6 6 0 0 1 0-5.36C75.35 163.88 92.7 130 128 130s52.65 33.88 53.37 35.32M169.08 168c-4.46-7.12-18.41-26-41.08-26s-36.65 18.85-41.08 26c4.46 7.13 18.41 26 41.08 26s36.65-18.85 41.08-26");
}
</style><path class="qtu-yctmq"/>`,
		"fallback": "ph:hand-eye-light",
	});
}

export default Component;
